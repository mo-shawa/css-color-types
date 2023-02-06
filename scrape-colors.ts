import axios from "axios"
import * as cheerio from "cheerio"
import * as fs from "fs"

const URL = "https://www.w3.org/wiki/CSS/Properties/color/keywords"

const axiosInstance = axios.create()

axiosInstance.get(URL).then((res) => {
	const markup = res.data
	const $ = cheerio.load(markup)

	const tr = $("tr")

	const td = tr.children("td:nth-child(3)").text()

	const colors = td.split("\n")

	const colorsArray = colors.map((color) => color.trim())

	fs.writeFileSync("./colors.json", JSON.stringify(colorsArray))
})
