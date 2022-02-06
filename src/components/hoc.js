const HOC = (WrappedCmp) => {
    const color = ["#673ab7", "#3f51b5", "#2196f3", "#009688"]
    const randomColor = color[Math.floor(Math.random() * 4)]
    return () => {
        return (
            <div style={{ color: randomColor }}>
                <WrappedCmp />
            </div>
        )
    }
}

export default HOC