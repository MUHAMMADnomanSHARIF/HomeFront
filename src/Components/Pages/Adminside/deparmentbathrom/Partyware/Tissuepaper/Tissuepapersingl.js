
import withDataFetching from '../../../../../withDataFetching';
import SinglePage from '../../../../../SinglePage';

const Tissuepapersingl = withDataFetching(SinglePage, 'http://srv577826.hstgr.cloud:8001/api/v1/data/bannersingle');

export default Tissuepapersingl;
