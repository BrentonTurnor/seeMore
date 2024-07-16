/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import "./ClubHistory.css"
import * as XLSX from 'xlsx';

export const ClubHistory = () => {

    const [data, setData] = useState([]);
    const [data2022, set2022Data] = useState([]);
    const [totalWinnings, setTotalWinnings] = useState([]);
    const [totalWinnings2022, setTotalWinnings2022] = useState([]);

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

            /* Define worksheet tab */
            var sheet_name_2023 = workbook.SheetNames[4];
            var sheet_name_2022 = workbook.SheetNames[3];
            //console.log(sheet_name_2023)
            //console.log(sheet_name_2022)

            /* Get 2023 worksheet content*/
            var worksheet = workbook.Sheets[sheet_name_2023];
            //console.log(XLSX.utils.sheet_to_json(worksheet, { raw: true }));

            const parsedData = XLSX.utils.sheet_to_json(worksheet, { raw: true });

            const filteredResults = parsedData.slice(44, 54)

            const filteredResults2 = filteredResults.map(({ __EMPTY_2, __EMPTY_3 }) => ({ __EMPTY_2, __EMPTY_3 }))

            filteredResults2.sort((a, b) => b.__EMPTY_3 - a.__EMPTY_3)

            setData(filteredResults2);

            const totalWinnings = parsedData.slice(54, 55)

            const totalWinnings2 = totalWinnings.map(({ __EMPTY_2, __EMPTY_3 }) => ({ __EMPTY_2, __EMPTY_3 }))

            setTotalWinnings(totalWinnings2)

            /* Get 2022 worksheet content*/
            var worksheet2022 = workbook.Sheets[sheet_name_2022];
            //console.log(XLSX.utils.sheet_to_json(worksheet2022, { raw: true }));

            const parsedData2022 = XLSX.utils.sheet_to_json(worksheet2022, { raw: true });

            const filteredResult2022 = parsedData2022.slice(39, 49)

            const filteredResults2022 = filteredResult2022.map(({ __EMPTY_2, __EMPTY_3 }) => ({ __EMPTY_2, __EMPTY_3 }))

            filteredResults2022.sort((a, b) => b.__EMPTY_3 - a.__EMPTY_3)

            filteredResults2022.forEach((element, index) => {
                element.__EMPTY_3 = element.__EMPTY_3.toFixed(2)
            })

            set2022Data(filteredResults2022);

            const totalWinning2022 = parsedData2022.slice(49, 50)

            const totalWinnings2022 = totalWinning2022.map(({ __EMPTY_2, __EMPTY_3 }) => ({ __EMPTY_2, __EMPTY_3 }))

            totalWinnings2022.forEach((element, index) => {
                element.__EMPTY_3 = element.__EMPTY_3.toFixed(2)
            })

            setTotalWinnings2022(totalWinnings2022)

        }

        oReq.send();

    }, []);


    return (
        <div className='ClubHistory-div'>
            <h1 className='text' id="text-header">Club History</h1>
            <div className='seasonsContainer'>
                <div className='seasonsDiv' id="div2023">
                    <h2 className='text-subheader' >2023 Season</h2>
                    <p><p className='HistoryTitle'>First:</p>    Brendan Spicer</p>
                    <p><p className='HistoryTitle'>Second:</p>   Daniel Milevski</p>
                    <p><p className='HistoryTitle'>Third:</p>    Simon Capozzi</p>
                    <p><p className='HistoryTitle'>Toilet:</p>   Kane Hornsey</p>
                </div>
                <div className='seasonsDiv' id="div2022">
                    <h2 className='text-subheader' >2022 Season</h2>
                    <p><p className='HistoryTitle'>First:</p>    Paul Blakey</p>
                    <p><p className='HistoryTitle'>Second:</p>   Brenton Jaskola</p>
                    <p><p className='HistoryTitle'>Third:</p>    Brenton Turnor</p>
                    <p><p className='HistoryTitle'>Toilet:</p>   Brendan Spicer & Scott Bamford</p>
                </div>
                <div className='seasonsDiv' id="div2021">
                    <h2 className='text-subheader' >2021 Season</h2>
                    <p><p className='HistoryTitle'>First:</p>    Scott Bamford</p>
                    <p><p className='HistoryTitle'>Second:</p>   Brenton Jaskola</p>
                    <p><p className='HistoryTitle'>Third:</p>    Brenton Turnor</p>
                    <p><p className='HistoryTitle'>Toilet:</p>   Brendan Spicer & Beau Raffaele</p>
                </div>
                <div className='seasonsDiv' id="div2020">
                    <h2 className='text-subheader' >2020 Season</h2>
                    <p><p className='HistoryTitle'>First:</p>    Brenton Turnor</p>
                    <p><p className='HistoryTitle'>Second:</p>   Brendan Spicer</p>
                    <p><p className='HistoryTitle'>Third:</p>    Scott Bamford</p>
                    <p><p className='HistoryTitle'>Toilet:</p>   Kane Hornsey & Daniel Milevski</p>
                </div>
                <div className='seasonsDiv' id="div2019">
                    <h2 className='text-subheader' >2019 Season</h2>
                    <p><p className='HistoryTitle'>First:</p>    Beau Raffaele</p>
                    <p><p className='HistoryTitle'>Second:</p>   Daniel Milevski</p>
                    <p><p className='HistoryTitle'>Third:</p>    Scott Bamford</p>
                    <p><p className='HistoryTitle'>Toilet:</p>   No Record</p>
                </div>
                <div className='seasonsDiv' id="div2018">
                    <h2 className='text-subheader' >2018 Season</h2>
                    <p><p className='HistoryTitle'>First:</p>    Beau Raffaele</p>
                    <p><p className='HistoryTitle'>Second:</p>   No Record</p>
                    <p><p className='HistoryTitle'>Third:</p>    No Record</p>
                    <p><p className='HistoryTitle'>Toilet:</p>   No Record</p>
                </div>
            </div>
        </div>
    )
}