import {defineConfig} from "cypress"
import {addMatchImageSnapshotPlugin} from "@simonsmith/cypress-image-snapshot/plugin"

export default defineConfig({
    component: {
        devServer: {
            framework: "vue",
            bundler: "vite"
        },
        setupNodeEvents(on, config) {
            addMatchImageSnapshotPlugin(on)
        }
    }
})
