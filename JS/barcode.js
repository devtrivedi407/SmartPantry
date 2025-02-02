document.addEventListener("DOMContentLoaded", function () {
    const video = document.getElementById("scanner-video");
    const barcodeData = document.getElementById("barcode-data");
    const startScanBtn = document.getElementById("start-button"); // Ensure correct button is used

    // ✅ Start Barcode Scanner
    function startBarcodeScanner() {
        if (typeof Quagga === "undefined") {
            console.error("Quagga.js not loaded!");
            return;
        }

        // ✅ Initialize Quagga
        Quagga.init(
            {
                inputStream: {
                    name: "Live",
                    type: "LiveStream",
                    target: "#scanner-frame", // Changed to frame to properly contain the video
                    constraints: {
                        width: 600,
                        height: 400,
                        facingMode: "environment",
                    },
                },
                decoder: {
                    readers: ["ean_reader", "code_128_reader", "upc_reader"],
                },
            },
            function (err) {
                if (err) {
                    console.error("Error initializing Quagga:", err);
                    return;
                }
                console.log("✅ Quagga started.");
                Quagga.start();
            }
        );

        // ✅ Barcode Detection
        Quagga.onDetected(async function (result) {
            let barcode = result.codeResult.code;
            console.log("✅ Barcode Detected:", barcode);

            barcodeData.textContent = `Detected: ${barcode}`;
            Quagga.stop(); // Stop scanner after detection

            let detectedItem = await getItemNameFromBarcode(barcode);

            if (detectedItem) {
                let quantity = prompt(`Enter quantity for ${detectedItem}:`, "1");
                let expiration = prompt("Enter expiration date (YYYY-MM-DD):", "");

                if (quantity && expiration) {
                    addToDatabase(detectedItem, quantity, expiration);
                }
            } else {
                alert("❌ Item not found. Please add manually.");
            }
        });
    }

    // ✅ Fetch Item Name from Open Food Facts API
    async function getItemNameFromBarcode(barcode) {
        let apiURL = `https://world.openfoodfacts.org/api/v0/product/${barcode}.json`;
        try {
            let response = await fetch(apiURL);
            if (!response.ok) throw new Error("Network error");
            let data = await response.json();
            return data.product ? data.product.product_name : null;
        } catch (error) {
            console.error("❌ Error fetching item:", error);
            return null;
        }
    }

    // ✅ Store Item in Local Storage
    function addToDatabase(name, quantity, expiration) {
        let storedIngredients = JSON.parse(localStorage.getItem("ingredients")) || [];
        
        // ✅ Mark barcode-scanned items separately
        storedIngredients.push({ name, quantity, expiration, scanned: true });
    
        localStorage.setItem("ingredients", JSON.stringify(storedIngredients));
    
        alert(`✅ ${name} has been added to your fridge inventory.`);
        window.location.href = "database.html"; // Redirect to database page
    }
    

    // ✅ Event Listener for Start Scanning Button
    if (startScanBtn) {
        startScanBtn.addEventListener("click", function () {
            console.log("🔍 Start button clicked, initializing scanner...");
            startBarcodeScanner();
        });
    } else {
        console.error("❌ Start button not found!");
    }
});
