const XlsxPopulate = require('xlsx-populate');
 const newA1Val = "REPLACE TEST"
// Load an existing workbook
XlsxPopulate.fromFileAsync("./TEMPLATE_XLSX.xlsx")
    .then(workbook => {
        // Modify the workbook.
        const value = workbook.sheet("DSHSL1").cell("A1").value();
        workbook.sheet("DSHSL1").cell("A1").find(value, newA1Val);
        // Log the value.
        console.log(value);
        return workbook.toFileAsync("./out.xlsx");
    });