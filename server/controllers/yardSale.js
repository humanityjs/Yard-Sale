import model from '../models';
const YardSale = model.yardsale;
import { 
  sendMessage,
  sendData
} from '../utilities';
module.exports = {
  /**
   * Create Yard sale
   * @param {any} req 
   * @param {any} res 
   * @returns {req}
   */
  createYardSale(req, res) {
    const yardSaleObj = req.body;
    // check if an yardSale does not exist with this name
    // get owner name
    YardSale.findOne({
      where: { title: yardSaleObj.title },
      attributes: ['id']
    })
    .then((existingYardSale) => {
      if(existingYardSale) {
        return sendMessage(res,`A yardsale already exist with title ${yardSaleObj.title}`,400);
      }
      YardSale.create(yardSaleObj)
      .then(newYardSale => sendData(res, yardSaleObj, 201, 'document'))
      .catch(err => sendMessage(res, err.message, 500));
    })
    .catch(error => sendMessage(res, error.message, 500));
  },
  /**
   * search Yard sale by  locations, title , Start Date and Sales Date 
   * @param {any} req 
   * @param {any} res 
   * @returns {req}
   */
  searchYardSale(req, res) {
      let query = req.quey;
      const offset = parseInt(req.query.offset, 10) || 0;
      const limit = parseInt(req.query.limit, 10) || 10;
      YardSale.findAndCountAll({
        where: { ...query },
        offset,
        limit,
        order: [['title', 'ASC']],
      })
      .then((yardSales) => {
        if (yardSales.length < 1) {
          return sendMessage(res, 'No yardSale was found.', 404);
        }
        const count = yardSales.count;
        const rows = yardSales.rows;
        const yardSalesPayload = {
          count,
          rows,
          curPage: parseInt(offset / limit, 10) + 1,
          pageCount: parseInt(count / limit, 10),
          pageSize: rows.length
        };
        return sendData(res, yardSalesPayload, 200, 'yardSales');
      });
  }
}
