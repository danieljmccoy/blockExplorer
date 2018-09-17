const blocksBackButton = document.querySelector(".blocksBack");
const blockRangeButton = document.querySelector(".blockRange");
  // blocks back form label
const blocksBackLabel = document.querySelector(".range1Label");
  // blocks back text input
const blocksBackInput = document.querySelector("#range1");
  // range form label
const blockRangeLabel = document.querySelector(".range2Label");
  // range back text input
const blockRangeInput = document.querySelector("#range2");

const uiObject = {
  
  start : function(){ window.onload = function() {
      blockRangeLabel.style.display = "none";
      blockRangeInput.style.display = "none";
      blocksBackButton.classList.add("loadClass");
    }
  },
 

  getBlockRange : function(){ 
    blockRangeButton.addEventListener("click", function() {
      blocksBackButton.classList.remove("loadClass");
      blockRangeLabel.style.display = "inline";
      blockRangeInput.style.display = "inline";
      blocksBackInput.placeholder = "Enter a starting block"
      blockRangeInput.placeholder = "Enter an ending block";
      blocksBackLabel.textContent = "Starting Block:";
      blockRangeLabel.textContent = "Ending Block:";
    })
  },
    
  getBlocksBack : function() { 
    blocksBackButton.addEventListener("click", function() {
      blockRangeLabel.style.display = "none";
      blockRangeInput.style.display = "none";
      blocksBackLabel.style.display = "inline";
      blocksBackInput.style.display = "inline";
      // run search test/criteria off of the current placeholder or current textContent
      /*
      function queryBlocksBackOrRange() {
        if(blocksBackInput.placeholder === "Enter how many blocks back to search") {
          console.log("it's a single value placeholder - look for one block!")
        }
      }
      */
      blocksBackInput.placeholder = "Enter how many blocks back to search"
      blocksBackLabel.textContent = "Blocks to Search"
    })
  }
}

uiObject.start();
uiObject.getBlockRange();
uiObject.getBlocksBack();