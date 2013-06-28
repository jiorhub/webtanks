import vibe.d;

private void index(HTTPServerRequest req, HTTPServerResponse res) {
    res.renderCompat!("index.dt", HTTPServerRequest, "req")(req);
}

shared static this() {
    auto router = new URLRouter;
    router.get("/", &index);
    router.get("/static/*", serveStaticFiles("./static/", new HTTPFileServerSettings("/static/")));

    auto settings = new HTTPServerSettings;
    settings.port = 8001;
    
    listenHTTP(settings, router);
}
