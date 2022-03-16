import { render } from '@testing-library/react'
import { AppContext } from './App'

const customRender = (ui, { providerProps, ...RenderOptions }) => {
    return render(
        <AppContext.Provider {...providerProps}>{ui}</AppContext.Provider>,
        RenderOptions,
    )
}

export * from '@testing-library/react'
export { customRender as render }
