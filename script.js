var url = 'http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D';
var tableInfo = document.getElementById("table-body")
var infoContent = document.getElementById("info-content")


var apiEnd = new XMLHttpRequest()
apiEnd.open("GET", url, true)
apiEnd.send()

apiEnd.onreadystatechange = function () {
    if (apiEnd.readyState == 4) {
        resp = JSON.parse(apiEnd.responseText)
        console.log(resp)
        for (i = 0; i < resp.length; i++) {
            id = resp[i]["id"]
            first = resp[i]["firstName"]
            last = resp[i]["lastName"]
            mail = resp[i]["email"]
            phone = resp[i]["phone"]
            address = resp[i]["address"]

            description = resp[i]["description"]
            createEntry(id, first, last, mail, phone, address, description)

        }
    }
}


function createEntry(id, first, last, mail, phone, address, description) {
    tableRow = document.createElement("tr")
    tableRow.classList.add("data-row")
    tableRow.id = id
    tableRow.addEventListener("click", function () {
        allElement = document.getElementsByClassName("data-row")
        for (i = 0; i < allElement.length; i++) {
            allElement[i].style.backgroundColor = "white"
        }
        document.getElementById(id).style.backgroundColor = "lightseagreen"
        var innerName = "<div><b>User selected:</b>" + first + " " + last + "</div>"
        var innerDescription = "<div><b> Description: </b><textarea cols='50' rows='5' readonly>" + description + "</textarea></div >"

        console.log(innerTotal)
        var street = "<div><b>Address:</b>" + address["streetAddress"] + "</div>"
        var city = "<div><b>City:</b>" + address["city"] + "</div>"
        var state = "<div><b>State:</b>" + address["state"] + "</div>"
        var zip = "<div><b>Zip:</b>" + address["zip"] + "</div>"
        var innerTotal = innerName + innerDescription + street + city + state + zip
        infoContent.innerHTML = innerTotal
        infoContent.style.display = "block"



    })
    columnOne = document.createElement("td")
    columnOne.classList.add("column1")
    columnOne.innerText = id
    columnTwo = document.createElement("td")
    columnTwo.classList.add("column2")
    columnTwo.innerText = first
    columnThree = document.createElement("td")
    columnThree.classList.add("column3")
    columnThree.innerText = last
    columnFour = document.createElement("td")
    columnFour.classList.add("column4")
    columnFour.innerText = mail
    columnFive = document.createElement("td")
    columnFive.classList.add("column5")
    columnFive.innerText = phone
    tableRow.appendChild(columnOne)
    tableRow.appendChild(columnTwo)
    tableRow.appendChild(columnThree)
    tableRow.appendChild(columnFour)
    tableRow.appendChild(columnFive)


    tableInfo.appendChild(tableRow)

}


var searchBox = document.getElementById("search-box")
var allElem = document.getElementsByClassName("data-row")



searchBox.addEventListener("input", function () {
    content = searchBox.value
    for (i = 0; i < allElem.length; i++) {
        name = allElem[i].getElementsByClassName("column2")[0].innerText
        name = name.toLowerCase()
        if (!(name.includes(content))) {
            allElem[i].style.display = "none"
        }
        else {
            allElem[i].style.display = ""
        }
    }

})
