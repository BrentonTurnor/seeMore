/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import "./Leaderboard.css"
import * as XLSX from 'xlsx';


export const Leaderboard = () => {

    const [data, setData] = useState([]);
    const [strikeData, setStrikeData] = useState([]);
    const [totalWinnings, setTotalWinnings] = useState([]);

    var url = './Data/HEMANPUNTERS.xlsx';
    var oReq = new XMLHttpRequest();
    oReq.open("GET", url, true);
    oReq.responseType = "arraybuffer";

    useEffect(() => {

        oReq.onload = function (e) {
            var arraybuffer = oReq.response;

            /* convert data to binary string */
            var data = new Uint8Array(arraybuffer);
            var arr = [];
            for (var i = 0; i !== data.length; ++i) arr[i] = String.fromCharCode(data[i]);
            var bstr = arr.join("");

            var workbook = XLSX.read(bstr, {
                type: "binary"
            });

            /* DO SOMETHING WITH workbook HERE */
            
            var sheet_name_2025 = workbook.SheetNames[6];
            
            console.log(sheet_name_2025)
            
            /* Get worksheet */
            var worksheet = workbook.Sheets[sheet_name_2025];
            console.log(XLSX.utils.sheet_to_json(worksheet, { raw: true }));

            const parsedData = XLSX.utils.sheet_to_json(worksheet, { raw: true });

            const filteredResults = parsedData.slice(42, 54)

            const filteredResults2 = filteredResults.map(({ __EMPTY_2, __EMPTY_3 }) => ({ 
                __EMPTY_2, 
                __EMPTY_3: typeof __EMPTY_3 === 'number' ? parseFloat(__EMPTY_3.toFixed(2)) : __EMPTY_3 
            }))

            const strikeResults = filteredResults.map(({ __EMPTY_8, __EMPTY_9 }) => ({ __EMPTY_8, __EMPTY_9 }))

            filteredResults2.sort((a, b) => b.__EMPTY_3 - a.__EMPTY_3)
            strikeResults.sort((a, b) => b.__EMPTY_9 - a.__EMPTY_9)

            console.log(filteredResults2)
            console.log(strikeResults)

            setData(filteredResults2);
            setStrikeData(strikeResults);

            const totalWinnings = parsedData.slice(54, 55)

            const totalWinnings2 = totalWinnings.map(({ __EMPTY_2, __EMPTY_3 }) => ({ __EMPTY_2, __EMPTY_3 }))

            console.log(totalWinnings)

            setTotalWinnings(totalWinnings2)

        }

        oReq.send();

    }, []);


    return (
        <div className='Leaderboard-div'>
            <h1 className='text' id="text-header">Leaderboard</h1>
            <h2 className='text' id="text-subheader">2025 Season</h2>
            <div className="LeaderboardTable">
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Winnings</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row, index) => (
                            <tr key={index}>
                                {Object.values(row).map((value) => (
                                    <td key={value}>{value}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                    <tbody >
                        {totalWinnings.map((row, index) => (
                            <tr key={index} >
                                {Object.values(row).map((value) => (
                                    <td key={value} className='totalWinnings'>{value}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <h2 className='text' id="text-subheader">2025 Strikes</h2>
            <div className="StrikeTable">
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Strikes</th>
                        </tr>
                    </thead>
                    <tbody>
                        {strikeData.map((row, index) => (
                            <tr key={index}>
                                {Object.values(row).map((value) => (
                                    <td key={value}>{value}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}