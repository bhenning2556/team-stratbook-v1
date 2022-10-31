import LinkHelper from "./linkHelper";

export default function MapArticle({attributes}) {
    let {mapTitle, defaults, executes} = attributes;
    return (
        <article>
          <h1>{mapTitle}</h1>
          <h2>Defaults</h2>
          <ul>
            {defaults.map((strat, k) => (
                <li key={k}>
                    <h4>{strat.title}</h4>
                    <ul>
                        {strat.spots.map((spots, k) => (
                            <li key={k}>
                                <p>{spots.spot}: {spots.playerNames}</p>
                            </li>
                        ))}
                    </ul>
                </li>
            ))}
          </ul>
          <h2>Executes</h2>
          <ul>
            {executes.map((strat, k) => (
                <li key={k}>
                    <h4>{strat.title}</h4>
                    <p>Required nades: smoke: {strat.nades.smoke}, molly: {strat.nades.molly}, flash: {strat.nades.flash}, he: {strat.nades.he}</p>
                    <p>Situation: {strat.situation}</p>
                    <p>Instructions:</p>
                    <ul>
                        {strat.instructions.map((instruction, k) => (
                            <li key={k}>
                                {instruction.playerName}: <LinkHelper paragraph={instruction.i} />
                            </li>
                        ))}
                    </ul>
                </li>
            ))}
          </ul>
        </article>
    )
}