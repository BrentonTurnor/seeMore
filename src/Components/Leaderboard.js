/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import "./Leaderboard.css"
import * as XLSX from 'xlsx';


export const Leaderboard = () => {

    const [data, setData] = useState([]);
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
            var first_sheet_name = workbook.SheetNames[4];

            console.log(first_sheet_name)

            /* Get worksheet */
            var worksheet = workbook.Sheets[first_sheet_name];
            console.log(XLSX.utils.sheet_to_json(worksheet, { raw: true }));

            const parsedData = XLSX.utils.sheet_to_json(worksheet, { raw: true });

            const filteredResults = parsedData.slice(44, 54)

            const filteredResults2 = filteredResults.map(({ __EMPTY_2, __EMPTY_3 }) => ({ __EMPTY_2, __EMPTY_3 }))

            filteredResults2.sort((a, b) => b.__EMPTY_3 - a.__EMPTY_3)

            console.log(filteredResults2)

            const decimal = 5.7672334;

            const new2 = decimal.toFixed(2);
            console.log(new2)

            setData(filteredResults2);

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
        </div>
    )
}