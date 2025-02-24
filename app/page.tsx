import { Button } from "antd";

export default function Home() {
  return (
    <div>
      <Button>Home Page</Button>

      <Button type="link" href="candidates">
        Link to Candidates Page
      </Button>
      <Button type="link" href="recruiters">
        Link to Recruiters Page
      </Button>
      <Button type="text" className="text-white">
        Dashed
      </Button>
    </div>
  );
}
