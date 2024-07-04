

        const developers = [
            {
              name: "Vee",
              laptops: [
                "Dell"
              ],
              phones: [
                "Samsung",
                "Xiaomi"
              ],
              computerSetups: [
                {
                  brand: "Lenovo",
                  monitors: 1,
                  keyboards: 1,
                  mice: 1,
                  speakers: 1
                }
              ]
            },
            {
              name: "Katlego",
              laptops: [
                "HP",
                "Samsung"
              ],
              phones: [
                "Apple",
                "Samsung",
                "Tecno",
                "Samsung"
              ],
              computerSetups: [
                {
                  brand: "Lenovo",
                  monitors: 2,
                  keyboards: 1,
                  mice: 1,
                  speakers: 2
                }, 
                {
                  brand: "Dell",
                  monitors: 1,
                  keyboards: 1,
                  mice: 1,
                  speakers: 1
                }
              ]
            },
            {
              name: "Rethabile",
              laptops: [
                "Samsung"
              ],
              phones: [
                "Samsung",
                "Huawei",
                "Poco"
              ],
              computerSetups: [
                {
                  brand: "Asus",
                  monitors: 1,
                  keyboards: 1,
                  mice: 1,
                  speakers: 1
                }, 
                {
                  brand: "Acer",
                  monitors: 1,
                  keyboards: 1,
                  mice: 1,
                  speakers: 2
                }
              ]
            },
            {
              name: "Gift",
              laptops: [],
              phones: [
                "Samsung"
              ],
              computerSetups: [
                {
                  brand: "Acer",
                  monitors: 3,
                  keyboards: 1,
                  mice: 1,
                  speakers: 2
                }, 
                {
                  brand: "HP",
                  monitors: 2,
                  keyboards: 1,
                  mice: 1,
                  speakers: 2
                }
              ]
            },
            {
              name: "Thokozile",
              laptops: [
                "Lenovo"
              ],
              phones: [
                "Apple"
              ],
              computerSetups: [
                {
                  brand: "Dell",
                  monitors: 1,
                  keyboards: 1,
                  mice: 1,
                  speakers: 2
                }, 
                {
                  brand: "Asus",
                  monitors: 1,
                  keyboards: 0,
                  mice: 1,
                  speakers: 1
                }, 
                {
                  brand: "Dell",
                  monitors: 1,
                  keyboards: 1,
                  mice: 1,
                  speakers: 1
                }
              ]
            }
          ]
          
        
        
        
        // Data arrays
        let names = ["Vee", "Katlego", "Rethabile", "Gift", "Thokozile"];
        let laptops = [["Dell"], ["HP", "Samsung"], ["Samsung"], [], ["Lenovo"]];
        let phones = [["Samsung", "Xiaomi"], ["Apple", "Samsung", "Tecno", "Samsung"], ["Samsung", "Huawei", "Poco"], ["Samsung"], ["Apple"]];
        let computerSetups = [
            [{ monitors: 1, keyboards: 1, mice: 1, speakers: 1 }],
            [{ monitors: 2, keyboards: 1, mice: 1, speakers: 2 }, { monitors: 1, keyboards: 1, mice: 1, speakers: 1 }],
            [{ monitors: 1, keyboards: 1, mice: 1, speakers: 1 }, { monitors: 1, keyboards: 1, mice: 1, speakers: 2 }],
            [{ monitors: 3, keyboards: 1, mice: 1, speakers: 2 }, { monitors: 2, keyboards: 1, mice: 1, speakers: 2 }],
            [{ monitors: 1, keyboards: 1, mice: 1, speakers: 2 }, { monitors: 1, keyboards: 0, mice: 1, speakers: 1 }, { monitors: 1, keyboards: 1, mice: 1, speakers: 1 }]
        ];

        // Function to get developer names
        function getDeveloperNames() {
            return names;
        }

        // Function to count total phones
        function getTotalPhones() {
            let total = 0;
            for (let phoneList of phones) {
                total += phoneList.length;
            }
            return total;
        }

        // Function to count incomplete setups
        function getIncompleteSetups() {
            let count = 0;
            for (let setupList of computerSetups) {
                for (let setup of setupList) {
                    if (setup.mice === 0 || setup.keyboards === 0 || setup.speakers === 0 || setup.monitors === 0) {
                        count++;
                    }
                }
            }
            return count;
        }

        // Function to get the most trusted phone brand
        function getMostTrustedBrand() {
            let phoneCounts = {};
            for (let phoneList of phones) {
                for (let phone of phoneList) {
                    if (phoneCounts[phone]) {
                        phoneCounts[phone]++;
                    } else {
                        phoneCounts[phone] = 1;
                    }
                }
            }
            let mostTrusted = Object.keys(phoneCounts).reduce((a, b) => phoneCounts[a] > phoneCounts[b] ? a : b);
            return mostTrusted;
        }

        // Function to get the least trusted phone brand
        function getLeastTrustedBrand() {
            let phoneCounts = {};
            for (let phoneList of phones) {
                for (let phone of phoneList) {
                    if (phoneCounts[phone]) {
                        phoneCounts[phone]++;
                    } else {
                        phoneCounts[phone] = 1;
                    }
                }
            }
            let leastTrusted = Object.keys(phoneCounts).reduce((a, b) => phoneCounts[a] < phoneCounts[b] ? a : b);
            return leastTrusted;
        }

        // Function to count developers without a phone
        function getNoPhoneCount() {
            let count = 0;
            for (let phoneList of phones) {
                if (phoneList.length === 0) {
                    count++;
                }
            }
            return count;
        }

        // Function to count developers without a laptop
        function getNoLaptopCount() {
            let count = 0;
            for (let laptopList of laptops) {
                if (laptopList.length === 0) {
                    count++;
                }
            }
            return count;
        }

        // Function to count developers without a computer setup (desktop)
        function getNoDesktopCount() {
            let count = 0;
            for (let setupList of computerSetups) {
                if (setupList.length === 0) {
                    count++;
                }
            }
            return count;
        }

        // Function to get the developer with the most total gadgets
        function getDeveloperWithMostGadgets() {
            let maxGadgets = 0;
            let maxIndex = -1;
            for (let i = 0; i < names.length; i++) {
                let totalGadgets = laptops[i].length + phones[i].length + computerSetups[i].length;
                if (totalGadgets > maxGadgets) {
                    maxGadgets = totalGadgets;
                    maxIndex = i;
                }
            }
            return { name: names[maxIndex], gadgets: maxGadgets };
        }

        // Function to get the developer with the most phones
        function getDeveloperWithMostPhones() {
            let maxPhones = 0;
            let maxIndex = -1;
            for (let i = 0; i < names.length; i++) {
                if (phones[i].length > maxPhones) {
                    maxPhones = phones[i].length;
                    maxIndex = i;
                }
            }
            return { name: names[maxIndex], phones: phones[maxIndex] };
        }

        // Function to get the developer with the most computer setups
        function getDeveloperWithMostComputerSetups() {
            let maxSetups = 0;
            let maxIndex = -1;
            for (let i = 0; i < names.length; i++) {
                if (computerSetups[i].length > maxSetups) {
                    maxSetups = computerSetups[i].length;
                    maxIndex = i;
                }
            }
            return { name: names[maxIndex], setups: computerSetups[maxIndex] };
        }

        // Function to get the developer with the most monitors
        function getDeveloperWithMostMonitors() {
            let maxMonitors = 0;
            let maxIndex = -1;
            for (let i = 0; i < names.length; i++) {
                let totalMonitors = 0;
                for (let setup of computerSetups[i]) {
                    totalMonitors += setup.monitors;
                }
                if (totalMonitors > maxMonitors) {
                    maxMonitors = totalMonitors;
                    maxIndex = i;
                }
            }
            return { name: names[maxIndex], monitors: maxMonitors };
        }


          // Logging the results
          console.log("Developer Names:", getDeveloperNames());
          console.log("Total Phones:", getTotalPhones());
          console.log("Incomplete Setups:", getIncompleteSetups());
          console.log("Most Trusted Brand:", getMostTrustedBrand());
          console.log("Least Trusted Brand:", getLeastTrustedBrand());
          console.log("No Phone Count:", getNoPhoneCount());
          console.log("No Laptop Count:", getNoLaptopCount());
          console.log("No Desktop Count:", getNoDesktopCount());
          console.log("Developer with Most Gadgets:", getDeveloperWithMostGadgets());
          console.log("Developer with Most Phones:", getDeveloperWithMostPhones());
          console.log("Developer with Most Computer Setups:", getDeveloperWithMostComputerSetups());
          console.log("Developer with Most Monitors:", getDeveloperWithMostMonitors());
