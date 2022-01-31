import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import { renderWithLayout } from "../../layout/Layout";
import axios, { AxiosResponse } from 'axios';
import { MenuItem } from "../../interfaces/menu.interface";
import { TopLevelCategory, TopPageModel } from "../../interfaces/page.interface";
import { ParsedUrlQuery } from "querystring";
import { ProductModel } from "../../interfaces/product.interface";
import { firstLevelMenu } from "../../helpers/helpers";
  

function Course({ products }: CourseProps): JSX.Element {
 
    return (
        <>
            {products && products.length}
        </>
    );
}

export default renderWithLayout(Course);

export const getStaticPaths: GetStaticPaths = async () => {
    let paths: string[] = [];

    for (const i of firstLevelMenu) {
        const { data: menu }: AxiosResponse<MenuItem[]> = await axios
            .post(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', { firstCategory: i.id });
        paths = paths.concat(menu.flatMap(m => m.pages.map(p=> `/${i.route}/${p.alias}`)));
    }
    return {
        paths,
        fallback: true
    };
};

export const getStaticProps: GetStaticProps<CourseProps> = async ({ params }: GetStaticPropsContext<ParsedUrlQuery>) => {
    if (!params) {
        return {
            notFound: true
        };
    }
    const firstCategoryItem = firstLevelMenu.find(menu => menu.route === params.type);
    
    if (!firstCategoryItem) {
        return {
            notFound: true
        };
    }
    try {
    const { data: menu }: AxiosResponse<MenuItem[]> = await axios
        .post(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', { firstCategory: firstCategoryItem.id });
    
        if (menu.length === 0) {
          return {
            notFound: true
        };
     }

    const { data: page }: AxiosResponse<TopPageModel> = await axios
        .get(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/byAlias/' + params.alias);
    
    const { data: products }: AxiosResponse<ProductModel[]> = await axios
        .post(process.env.NEXT_PUBLIC_DOMAIN + '/api/product/find', {
            category: page.category,
            limit: 7
        });
    
    return {
        props: {
            firstCategory: firstCategoryItem.id,
            menu,
            page,
            products
        }
    };
    } catch {
         return {
            notFound: true
        };
    }
};

interface CourseProps extends Record<string, unknown> {
    menu: MenuItem[];
    firstCategory: TopLevelCategory;
    page: TopPageModel;
    products: ProductModel[];
}