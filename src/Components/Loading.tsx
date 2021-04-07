export const LoadingComponent: React.FC<{show: boolean}> = props => {
    if(!props.show) return null
    return (
        <>
            <p>Loading...</p>
            {/* fancy, animated and totaly NON-EXISTENT spinner */}
            <svg><use xlinkHref="#spinner"></use></svg>
        </>
    )
}
