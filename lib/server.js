const Koa = require("koa");
const Router = require("koa-router");
const cors = require("koa-cors");
const session = require("koa-session-minimal");
const bodyParser = require("koa-bodyparser");
const path = require("path");
const user = new Router();
const router = new Router();
const app = new Koa();
const fs = require("fs");

app.listen(8989, () => {
    console.log("port success at 8989");
});
app.use(bodyParser());
app.use(cors());

app.use(async (ctx, next) => {
    ctx.userInfo = await new Promise((resolve, reject) => {
        fs.readFile("./userInfo.json", "utf8", (e, data) => {
            if (e) {
                reject("failed");
            } else {
                resolve(JSON.parse(data));
            }
        });
    });
    next();
});

user.post("/login", ctx => {
    let userInfo = ctx.request.body;
    let res = ctx.userInfo.find((item, index) => {
        return (
            item.username == userInfo.username &&
            item.password == userInfo.password
        );
    });
    ctx.body = res ? "success" : "sorry";
});

router.use("/user", user.routes(), user.allowedMethods());
app.use(router.routes(), router.allowedMethods());
