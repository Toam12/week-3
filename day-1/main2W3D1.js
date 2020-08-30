
const useData = function (data){
	let title = data.items[0].volumeInfo.title
	let author = data.items[0].volumeInfo.authors
	data.items.forEach( function(book){ 
		console.log(book.volumeInfo.title)
	})
	console.log(data)
}
const fanch = function (queryType , queryValue){
	 $.ajax({
		 method: "GET",
		 url: `https://www.googleapis.com/books/v1/volumes?q="isbn"=30`,
		 success: useData ,
		 error:function(xht,text,error){
			 alert("somthing")
		 }
	   })
} 
  

  
fanch()




