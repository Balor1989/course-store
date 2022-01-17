import { Htag,  Button } from "../components";

export const App = () => {
    return (
        <>
            <Htag tag='h1'> Hello!</Htag>
            <Htag tag='h2'> Hello!</Htag>
            <Htag tag='h3'> Hello!</Htag>
            <Button appearance="primary" arrow='down'>Кнопка</Button>
            <Button appearance="secondary" arrow="right">Кнопка</Button>
        </>
    );
};