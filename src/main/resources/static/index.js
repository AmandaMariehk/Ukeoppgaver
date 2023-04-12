$(() =>{
    $("#register").click(() =>{
        const pNumber = $("#pNumber");
        const name = $("#name");
        const address = $("#address");
        const characteristics = $("#characteristics");
        const brand = $("#chosenBrand");
        const type = $("#chosenType");

        const registration = {
            pNumber: pNumber.val(),
            name: name.val(),
            address: address.val(),
            characteristics: characteristics.val(),
            brand: brand.val(),
            type: type.val()
        };

        if (inputval(registration)) {
            $.post("/api", registration, () => fetchRegistrations())

            pNumber.val("")
            name.val("")
            address.val("")
            characteristics.val("")
            formatBrandInput()
            resetTypeInput()
        }
        else {
            console.log(wronginput)
        }
    })

    $("#deleteAll").click(() =>{
        $.ajax("api", {
            type: "DELETE",
            success: () => fetchRegistrations(),
            errr: (jqXhr, textStatus, errorMessage) => console.log(errorMessage)
        })
    });

    formatBrandInput();

    resetTypeInput();

    fetchRegistrations();
})

const fetchRegistrations = () => $.get("/api/registrations", list => formatList(list))

const formatList = list => {
    let msg = "";

    if(list.length > 0) {
        msg += "<table class='table table-striped'><tr><th>Personnr</th><th>Navn</th><th>Adresse</th><th>Kjennetegn</th><th>Merke</th><th>Type</th></tr>"

        for(let registration of list){
            msg += "<tr><td>" + registration.pNumber + "</td><td>" + registration.name + "</td><td>" + registration.address + "</td>" +
                "<td>" + registration.characteristics + "</td><td>" + registration.brand + "</td><td>" + registration.type + "</td></tr>"
        }

        msg += "</table>"
    }

    $("#list").html(msg)
}

const formatBrandInput = () => $.get("/api/cars", list => {
    let msg = "<select class='form-control' id='chosenBrand'>";

    let lastBrand = "";

    msg += "<option value='' selected hidden disabled >Velg Merke</option>";

    for (const car of list){
        if (car.brand !== lastBrand){
            msg += "<option>" + car.brand + "</option>";
        }
        lastBrand = car.brand;
    }
    msg += "</select>"

    $("#brand").html(msg);

    $("#chosenBrand").on("change", formatTypeInput);
})

const formatTypeInput = () => $.get ("/api/cars", list => {
    let msg = "<select class='form-control' id='chosenType'>";

    const currentBrand = $("#chosenBrand").val();

    msg += "<option value=''>Velg Type</option>";

    for (const car of list){
        if (car.brand === currentBrand){
            msg += "<option>" + car.type + "</option>";
        }
    }

    msg += "</select>";

    $("#type").html(msg);
})

const resetTypeInput = () => {
    const msg = "" +
        "<select disabled name='' id='' class='form-control'>" +
        "<option disabled selected value=''>Velg merke for å velge type</option>" +
        "</select>"

    $("#type").html(msg);
}

const inputval = registration => {
    if (registration.pNumber === "") return false
    else if (registration.name === "") return false
    else if (registration.address === "") return false
    else if (registration.characteristics === "") return false
    else if (registration.brand === "") return false
    else if (registration.type === "") return false
}

