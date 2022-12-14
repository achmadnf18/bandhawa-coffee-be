import App from '@/app';
import AuthRoute from '@routes/auth.route';
import IndexRoute from '@routes/index.route';
import UsersRoute from '@routes/users.route';
import validateEnv from '@utils/validateEnv';
import ProductsRoute from './routes/products.route';

validateEnv();

const app = new App([new IndexRoute(), new UsersRoute(), new ProductsRoute(), new AuthRoute()]);

app.listen();
