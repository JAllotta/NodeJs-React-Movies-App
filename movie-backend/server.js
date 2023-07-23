const Koa = require("koa");
const BodyParser = require("koa-bodyparser");
const Router = require("koa-router");
const Logger = require("koa-logger");
const cors = require("koa-cors");
const serve = require("koa-static");
const mount = require("koa-mount");
const HttpStatus = require("http-status");
const axios = require("axios");

const app = new Koa();

const PORT = process.env.PORT || 3001;

app.use(BodyParser());
app.use(Logger());
app.use(cors());

const router = new Router();

router.get("/movies", async (ctx, next) => {
  //console.log(ctx);
  //console.log('Julian', ctx.query.search);
  
  try {
    let search = String(ctx.query.search);
    // if (search == null || search.length === 0) 
    //     search = "Avengers";
    options.params.s = search;
    //const req = {...options, params.s: search};
    //console.log('Julian2', options);
    const response = await axios.request(options);
    //console.log(response.data);
    ctx.status = HttpStatus.OK;
    ctx.body = response.data.Search;
  } catch (error) {
    console.error(error);
  }

  await next();
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(PORT, function () {
  console.log(
    "==> 🌎  Listening on port %s. Visit http://localhost:%s/",
    PORT,
    PORT
  );
});

const options = {
  method: "GET",
  url: "https://movie-database-alternative.p.rapidapi.com/",
  params: {
    s: "Avengers Endgame",
    r: "json",
    page: "1",
  },
  headers: {
    "X-RapidAPI-Key": "ae1889a9damshe5bce261de3c178p1a7774jsnd66f6aa4c095",
    "X-RapidAPI-Host": "movie-database-alternative.p.rapidapi.com",
  },
};
