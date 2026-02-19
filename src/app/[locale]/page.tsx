import { T, Currency, Num, Branch, Var } from "gt-next";
import { LocaleSelector } from "gt-next";

type MenuItem = {
  name: string;
  description: string;
  price: number;
  dietary: "vegetarian" | "vegan" | "none";
  spiceLevel: number;
};

type MenuSection = {
  title: string;
  items: MenuItem[];
};

const menu: MenuSection[] = [
  {
    title: "Starters",
    items: [
      {
        name: "French Onion Soup",
        description: "Slow-cooked onion broth with melted Gruyere and toasted bread",
        price: 12,
        dietary: "vegetarian",
        spiceLevel: 0,
      },
      {
        name: "Tuna Tartare",
        description: "Fresh yellowfin tuna with avocado, sesame, and citrus ponzu",
        price: 18,
        dietary: "none",
        spiceLevel: 1,
      },
      {
        name: "Roasted Beet Salad",
        description: "Heirloom beets with goat cheese, candied walnuts, and arugula",
        price: 14,
        dietary: "vegetarian",
        spiceLevel: 0,
      },
    ],
  },
  {
    title: "Main Courses",
    items: [
      {
        name: "Pan-Seared Salmon",
        description: "Atlantic salmon with lemon-dill sauce, asparagus, and fingerling potatoes",
        price: 32,
        dietary: "none",
        spiceLevel: 0,
      },
      {
        name: "Grilled Ribeye",
        description: "Dry-aged 14oz ribeye with truffle butter, roasted garlic, and seasonal vegetables",
        price: 48,
        dietary: "none",
        spiceLevel: 0,
      },
      {
        name: "Wild Mushroom Risotto",
        description: "Arborio rice with porcini, chanterelle, and shaved Parmigiano-Reggiano",
        price: 26,
        dietary: "vegetarian",
        spiceLevel: 0,
      },
      {
        name: "Thai Red Curry",
        description: "Coconut milk curry with seasonal vegetables, jasmine rice, and Thai basil",
        price: 24,
        dietary: "vegan",
        spiceLevel: 3,
      },
    ],
  },
  {
    title: "Desserts",
    items: [
      {
        name: "Creme Brulee",
        description: "Classic vanilla custard with caramelized sugar and fresh berries",
        price: 14,
        dietary: "vegetarian",
        spiceLevel: 0,
      },
      {
        name: "Dark Chocolate Fondant",
        description: "Warm chocolate cake with a molten center, served with vanilla ice cream",
        price: 16,
        dietary: "vegetarian",
        spiceLevel: 0,
      },
      {
        name: "Mango Sorbet",
        description: "House-made tropical sorbet with lime zest and fresh mint",
        price: 10,
        dietary: "vegan",
        spiceLevel: 0,
      },
    ],
  },
];

function DietaryBadge({ dietary }: { dietary: "vegetarian" | "vegan" | "none" }) {
  return (
    <Branch
      branch={dietary}
      vegetarian={
        <span className="inline-block text-xs font-medium px-2 py-0.5 rounded-full bg-emerald-900/50 text-emerald-400 border border-emerald-800">
          <T>Vegetarian</T>
        </span>
      }
      vegan={
        <span className="inline-block text-xs font-medium px-2 py-0.5 rounded-full bg-lime-900/50 text-lime-400 border border-lime-800">
          <T>Vegan</T>
        </span>
      }
    >
      <></>
    </Branch>
  );
}

function SpiceIndicator({ level }: { level: number }) {
  if (level === 0) return null;
  return (
    <span className="text-xs text-orange-400 ml-2">
      <T>
        Spice level: <Num>{level}</Num>/5
      </T>
    </span>
  );
}

function MenuItemCard({ item }: { item: MenuItem }) {
  return (
    <div className="flex justify-between items-start gap-4 py-5 border-b border-neutral-800 last:border-b-0">
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 flex-wrap">
          <h3 className="text-base font-medium text-neutral-100">
            <T>
              <Var>{item.name}</Var>
            </T>
          </h3>
          <DietaryBadge dietary={item.dietary} />
          <SpiceIndicator level={item.spiceLevel} />
        </div>
        <p className="text-sm text-neutral-500 mt-1 leading-relaxed">
          <T>
            <Var>{item.description}</Var>
          </T>
        </p>
      </div>
      <div className="text-base font-medium text-neutral-200 shrink-0">
        <Currency currency="USD">{item.price}</Currency>
      </div>
    </div>
  );
}

export default function Home() {
  const totalItems = menu.reduce((sum, section) => sum + section.items.length, 0);

  return (
    <div className="min-h-screen bg-neutral-950 font-sans text-neutral-200">
      <header className="border-b border-neutral-800 bg-neutral-950">
        <div className="max-w-3xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <a
              href="https://generaltranslation.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-neutral-400 hover:text-neutral-200 transition-colors"
            >
              General Translation
            </a>
            <span className="text-neutral-700">/</span>
            <h1 className="text-sm font-semibold text-neutral-100">
              Restaurant Menu
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/gt-examples/restaurant-menu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-neutral-200 transition-colors"
              aria-label="View on GitHub"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
            <LocaleSelector />
          </div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-12">
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-neutral-100 mb-3">
            <T>The Translating Kitchen</T>
          </h2>
          <p className="text-base text-neutral-400 max-w-xl leading-relaxed">
            <T>
              A multilingual restaurant menu featuring <Num>{totalItems}</Num> dishes.
              Prices, dietary labels, and descriptions are all translated and
              locale-formatted using gt-next.
            </T>
          </p>
        </div>

        {menu.map((section) => (
          <section key={section.title} className="mb-10">
            <h3 className="text-lg font-semibold text-neutral-100 mb-1 pb-3 border-b border-neutral-700">
              <T>
                <Var>{section.title}</Var>
              </T>
            </h3>
            <div>
              {section.items.map((item) => (
                <MenuItemCard key={item.name} item={item} />
              ))}
            </div>
          </section>
        ))}

        <div className="mt-12 pt-6 border-t border-neutral-800 text-center text-sm text-neutral-500">
          <T>
            Built with gt-next to demonstrate Currency, Num, Branch, and T components
            for multilingual content.
          </T>
        </div>
      </main>
    </div>
  );
}
