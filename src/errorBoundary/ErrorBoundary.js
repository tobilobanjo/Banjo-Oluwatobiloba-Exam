import FallbackUI from '../views/pageNotFound';

export default {
    name: 'ErrorBoundary',
    data: () => ({
        error: false
    }),
    errorCaptured (err, vm, info) {
        console.log(err, vm, info)
        this.error = true
    },
    render () {
        return FallbackUI
    }
}
