const {Router}=require('express');
const { renderIndex, renderAbout,renderActivities, renderJoinUp,renderSaraQuiz,
        renderGameSara,renderEnd0,renderEnd100,renderEnd200,renderEnd300,
        renderEnd400,getData,renderPrueba,renderdestino} 
    = require('../controllers/indexController');
const router=Router();

router.get('/',renderIndex);
router.get('/about',renderAbout);
router.get('/activities',renderActivities);
router.get('/joinUp',renderJoinUp);
/* QUIZ SARA la oruga */
router.get('/saraQuiz',renderSaraQuiz);
router.get('/gameSara',renderGameSara);
router.get('/fin_0pts',renderEnd0);
router.get('/fin_100pts',renderEnd100);
router.get('/fin_200pts',renderEnd200);
router.get('/fin_300pts',renderEnd300);
router.get('/fin_400pts',renderEnd400);
//router.get('/historial',getData);
router.get('/origen',renderPrueba);

module.exports=router;