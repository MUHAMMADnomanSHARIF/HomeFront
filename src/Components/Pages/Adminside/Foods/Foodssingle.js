import withDataFetching from '../../../withDataFetching';
import SinglePage from '../../../SinglePage';

const Foodssingle = withDataFetching(SinglePage, 'http://srv577826.hstgr.cloud:8001/api/v1/data/foodssingle');

export default Foodssingle;