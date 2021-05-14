var family_name = ["Amita Sharma",
                   "Raman Sharma",
                   "Ananyaa Sharma",
                   "Armita Sharma"];

var images = ["mother.png",
              "father.jpg", 
              "sister.jpg", 
              "Me.jpg"];

var i = 0;

function nextslide() {
    document.getElementById("family_name").innerHTML = family_name[i];
    document.getElementById("album").src = images[i];
    i++;
    
  if (i==4)
  {
  i=0;
  }
}

