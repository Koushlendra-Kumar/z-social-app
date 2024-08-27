import { Search } from "@mui/icons-material";

const year: number = new Date().getFullYear();

function Widgets() {
  return (
    <div className="mt-4 flex flex-col items-center justify-center gap-4">
      <div className="flex w-4/5 items-center justify-center gap-2 rounded-3xl bg-gray-200">
        <Search className="text-gray-500" />
        <input
          className="bg-gray-200 px-2 py-3 outline-none"
          type="text"
          placeholder="Search"
        />
      </div>
      <Subscription />
      <Trendings />
      <footer className="w-4/5 text-xs text-gray-500">
        &copy; {year} Z corp. All rights reserved.
        <br />
        Terms of Service | Privacy Policy | Cookies Settings | Ads Info | More..
      </footer>
    </div>
  );
}

function Subscription() {
  return (
    <div className="w-4/5 rounded-xl border border-gray-300 px-3 py-2">
      <h1 className="text-lg font-bold">Subscribe to Premium</h1>
      <p className="text-sm text-gray-500">
        Get access to all our content, written by professionals
      </p>
      <button className="mt-2 rounded-3xl bg-slate-900 px-4 py-2 font-semibold text-slate-100">
        Subscribe
      </button>
    </div>
  );
}

const trends = [
  {
    title: "#JavaScript",
    count: "1,235",
  },
  {
    title: "#React",
    count: "1,235",
  },
  {
    title: "#Node",
    count: "1,235",
  },
  {
    title: "#Next",
    count: "1,235",
  },
  {
    title: "#TypeScript",
    count: "1,235",
  },
];

function Trendings() {
  return (
    <div className="w-4/5 rounded-xl border border-gray-300 px-3 py-2">
      <h1 className="text-lg font-bold">Trending Topics</h1>
      <div className="my-4 space-y-3">
        {trends.map((trend, index) => (
          <div key={index} className="flex flex-col items-start justify-center">
            <span className="text-base font-semibold">{trend.title}</span>
            <span className="text-sm text-gray-500">{trend.count}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Widgets;
