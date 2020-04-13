This is part of hw3 for gologolo website:

query queryex1{
	logos {
    _id
  }
}

query queryex2{
  logo(id: "5e9369304d3d3452d4cdbaf7") {
    color
  }
}

query queryex3{
  logo(id: "5e936a184d3d3452d4cdbaf9") {
    fontSize
  }
}

mutation add1{
  addLogo(
    text: "ABCD"
    color: "#000000"
    fontSize: 10
    backgroundColor: "#0000ff"
    borderColor: "#00ff00"
    borderRadius: 10
    borderWidth: 10
    padding: 10
    margin: 10
  ) {
    _id
  }
}

mutation add2{
  addLogo(
    text: "HIJK"
    color: "#ff0000"
    fontSize: 30
    backgroundColor: "#00ffff"
    borderColor: "#ffff00"
    borderRadius: 30
    borderWidth: 30
    padding: 30
    margin: 30
  ) {
    _id
  }
}

mutation add3{
  addLogo(
    text: "XYZ"
    color: "#ff00ff"
    fontSize: 100
    backgroundColor: "#0ff0ff"
    borderColor: "#77ff77"
    borderRadius: 20
    borderWidth: 20
    padding: 20
    margin: 5
  ) {
    _id
  }
}

mutation update1{
  updateLogo(
    id: "5e94ea4c4d3d3452d4cdbafc"
    text: "abcdefg"
    color: "#000000"
    fontSize: 15
    backgroundColor: "#0000ff"
    borderColor: "#00ff00"
    borderRadius: 15
    borderWidth: 15
    padding: 15
    margin: 15) {
    text
  }
}

mutation update2{
  updateLogo(
    id: "5e94ea4c4d3d3452d4cdbafc"
    text: "abcdefg"
    color: "#000000"
    fontSize: 20
    backgroundColor: "#0000ff"
    borderColor: "#00ff00"
    borderRadius: 30
    borderWidth: 30
    padding: 20
    margin: 10) {
    text
  }
}

mutation update3{
  updateLogo(
    id: "5e94ea4c4d3d3452d4cdbafc"
    text: "abcdefg"
    color: "#000000"
    fontSize: 140
    backgroundColor: "#0000ff"
    borderColor: "#00ff00"
    borderRadius: 5
    borderWidth: 5
    padding: 5
    margin: 5) {
    text
  }
}

mutation remove1{
  removeLogo(id: "5e94ea4c4d3d3452d4cdbafc")
  {
  	_id
  }
}

mutation remove2{
  removeLogo(id: "5e938c664d3d3452d4cdbafa")
  {
    _id
  }
}

muatation remove3{
  removeLogo(id: "5e936a184d3d3452d4cdbaf9")
  {
    _id
  }
}