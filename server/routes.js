import Controllers from '../controllers';
import { validateUser, adminOnly } from '../utilities';


const yardsalesController = Controllers.YardSale;


module.exports = (app) => {

  // check for user session
  app.use(validateUser);

  app.get('/yardsales', yardsalesController.searchYardSale);

  // admin routes start here 
  app.post('/yardsales', adminOnly, yardsalesController.createYardSale);

}
