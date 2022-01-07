import { Htag } from "../components";
import { Button } from "../components/button/Button";

export const App = () => {
    return (
        <>
            <Htag tag='h1'> Hello!</Htag>
            <Htag tag='h2'> Hello!</Htag>
            <Htag tag='h3'> Hello!</Htag>
            <Button appearance="primary">Кнопка</Button>
            <Button appearance="secondary">Кнопка</Button>
        </>
    );
};