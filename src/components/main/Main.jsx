import Card from "./Card";
import "./Main.scss";
import { data as datas } from "../../data";
console.log(datas);

const Main = () => {
  return (
    <div className="mainStyled">
      {datas.map((data) => {
        return <Card key={data.id} {...data} />;
      })}
    </div>
  );
};

export default Main;
