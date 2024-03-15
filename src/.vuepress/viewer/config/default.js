export default function (viewerId) {
    const config = {
        locale: "fr",
        api: {
            accessToken: "TAbdyPzoQeYgVSMe4GUKoCEfYctVhcwJ",
            cloudId: 10344,
            projectId: 237466,
            modelIds: [15097],
        },
        plugins: {
            viewer3d: {
                help: false,
                navigationVersionsModel: false,
            },
            fullscreen: false,
            smartview: false,
            search: false,
            "window-manager": false,
            bcf: false,
        }
    }


    const viewer = makeBIMDataViewer(config);
    viewer.mount(viewerId, "3d");
}