import { render } from 'preact'
import './index.scss'
import { App } from './app.tsx'

async function enableMock() {
    if (import.meta.env.DEV) {
        const { worker } = await import('./mocks/browser.ts');
        return worker.start();
    }
}

enableMock().then(() => {
    render(<App />, document.getElementById('app')!)
});
