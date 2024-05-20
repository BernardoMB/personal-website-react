import { calculateInvestmentResults, formatter } from '../../util/investments.js'

export default function Results({input}) {
    const resultsData = calculateInvestmentResults(input)
    if (resultsData.length === 0) {
        return <p>Invalid input data provided.</p>
    }
    const initialInvestment = resultsData[0].valueEndOfYear - resultsData[0].interest - resultsData[0].annualInvestment
    return <table id="result">
        <thead>
            <tr>
                <th>
                    Year
                </th>
                <th>
                    Investment Value
                </th>
                <th>
                    Interest (Year)
                </th>
                <th>
                    Total Interest
                </th>
                <th>
                    Invested Capital
                </th>
            </tr>
        </thead>
        <tbody>
            {resultsData.map(yearData => {
                const totalInterest = yearData.valueEndOfYear - yearData.annualInvestment * yearData.year - initialInvestment
                const totalAmountInvested = yearData.valueEndOfYear - totalInterest
                return <tr key={yearData.year}>
                    <td>{yearData.year}</td>
                    <td>{formatter.format(yearData.valueEndOfYear)}</td>
                    <td>{formatter.format(yearData.interest)}</td>
                    <td>{formatter.format(totalInterest)}</td>
                    <td>{formatter.format(totalAmountInvested)}</td>
                </tr>
            })}
        </tbody>
    </table>
}