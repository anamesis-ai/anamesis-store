const fs = require("fs");
const readline = require("readline");
const path = require("path");

const inputPath = path.join(__dirname, "data", "products.js");
const outputPath = path.join(__dirname, "data", "products.enriched.js");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function ask(question) {
  return new Promise((resolve) => rl.question(question, resolve));
}

function extractJsonFromModule(moduleContent) {
  const match = moduleContent.match(/const products\s*=\s*(\[\s*[\s\S]*?\]);/);
  if (!match) throw new Error("Could not extract products array from products.js");
  return eval(match[1]); // ⚠️ Safe here because it's local and static
}

async function enrichProduct(product) {
  console.log(`\n🛠 Editing: ${product.name} (ID: ${product.id})`);

  if (!product.aiInsights.summary) {
    product.aiInsights.summary = await ask("Enter AI Summary: ");
  }

  if (!product.aiInsights.useCases.length) {
    const useCasesRaw = await ask("Enter use cases (comma-separated): ");
    product.aiInsights.useCases = useCasesRaw.split(",").map((u) => u.trim()).filter(Boolean);
  }

  if (!product.aiInsights.caution) {
    product.aiInsights.caution = await ask("Enter caution (or leave blank): ");
  }

  if (!product.affiliateData.price) {
    product.affiliateData.price = await ask("Enter affiliate price: ");
  }

  if (!product.affiliateData.availability) {
    product.affiliateData.availability = await ask("Enter availability: ");
  }
}

async function main() {
  const raw = fs.readFileSync(inputPath, "utf-8");
  const products = extractJsonFromModule(raw);

  for (const product of products) {
    const needsAI = !product.aiInsights?.summary;
    const needsAff = !product.affiliateData?.price;

    if (needsAI || needsAff) {
      await enrichProduct(product);
    }
  }

  rl.close();

  const updatedContent =
    "const products = " +
    JSON.stringify(products, null, 2) +
    ";\n\nmodule.exports = products;\n";

  fs.writeFileSync(outputPath, updatedContent);
  console.log(`\n✅ Done. Enriched file saved to: ${outputPath}`);
}

main();
