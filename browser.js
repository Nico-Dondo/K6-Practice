import { browser } from 'k6/experimental/browser' // se tiene que importar este comando

export const options = {
    scenarios: {
        ui: {
            executor: 'shared-iterations',
            options: {
                browser: {
                    type: 'chromium'
                },
            },
        },
    },
}
export default function (){
    const page = browser.newPage();
    page.goto('https://quickpizza.grafana.com/ ')
}