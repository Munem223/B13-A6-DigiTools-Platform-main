import designTool from "../assets/products/design-tool.png";
import operation from "../assets/products/operation.png";
import portfolio from "../assets/products/portfolio.png";
import shoppingCart from "../assets/products/shopping-cart.png";
import socialMedia from "../assets/products/social-media.png";
import writingTool from "../assets/products/writing_2327400 1.png";

const products = [
  {
    id: 1,
    name: "AI Writing Pro",
    description: "Create blogs, captions, emails and product copy faster.",
    price: 49,
    period: "monthly",
    tag: "Popular",
    tagType: "popular",
    features: ["100+ templates", "SEO content help", "Export ready"],
    icon: writingTool,
  },
  {
    id: 2,
    name: "Design Templates Pack",
    description: "Ready-made templates for social, brand and presentation use.",
    price: 69,
    period: "one-time",
    tag: "Best Seller",
    tagType: "best-seller",
    features: ["Canva friendly", "Editable design kit", "Modern layouts"],
    icon: designTool,
  },
  {
    id: 3,
    name: "Portfolio Booster",
    description: "Premium assets for portfolios, CVs and personal branding.",
    price: 29,
    period: "one-time",
    tag: "New",
    tagType: "new",
    features: ["Portfolio sections", "Resume blocks", "Clean UI assets"],
    icon: portfolio,
  },
  {
    id: 4,
    name: "Social Media Kit",
    description: "Boost your brand with reusable social media designs.",
    price: 39,
    period: "monthly",
    tag: "Popular",
    tagType: "popular",
    features: ["Post bundles", "Story templates", "Easy customization"],
    icon: socialMedia,
  },
  {
    id: 5,
    name: "E-commerce Starter",
    description: "Digital resources for product listing and store management.",
    price: 89,
    period: "yearly",
    tag: "Best Seller",
    tagType: "best-seller",
    features: ["Product assets", "Store checklist", "Launch support"],
    icon: shoppingCart,
  },
  {
    id: 6,
    name: "Premium Ops Stack",
    description: "Smart business operation templates for organized workflow.",
    price: 59,
    period: "monthly",
    tag: "New",
    tagType: "new",
    features: ["Workflow boards", "Business tracking", "Team-ready files"],
    icon: operation,
  },
];

export default products;