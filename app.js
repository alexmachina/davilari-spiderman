let crawlerController = require('./controllers/crawlerController'),
    dbController = require('./controllers/dbController')
crawlerController.getCategoryList()
  .then((categories) => {
    dbController.insertCategories(categories)
      .then(() => console.log("acabou"))
    }
  )

/*
let url = 'http://cdn.slidesharecdn.com/ss_thumbnails/some-any-1204738417991409-3-thumbnail-4.jpg?cb=1204709619',
    dest = 'img/some.jpg'
dbController.downloadImage(url, dest)
      .then(() => console.log("Foi"))
      */
