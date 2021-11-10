const googleSearch = require('./script');

dbMock = [
    'dog.com',
    'cheesepuff',
    'disney.com',
    'dogpictures.com',
    'dogggggpictures.com',
    'dogddsfasfaspictures.com'
]

describe('googleSearch', ()=>{
    it('this is a test', ()=> {
        expect(' Dang Ngan Hue').toBe(' Dang Ngan Hue');
    })
    
    it('is searching google', ()=> {
        expect(googleSearch('dogsss', dbMock)).toEqual([])
        expect(googleSearch('dog.', ['dog.com']))
    })
    
    it('work with undefined and null input', ()=>{
        expect(googleSearch(undefined, dbMock)).toEqual([])
        expect(googleSearch(null, dbMock)).toEqual([])
    })
    
    it('does not return more than 3 matches', ()=>{
        expect(googleSearch('dog', dbMock)).toEqual(['dog.com','dogpictures.com','dogggggpictures.com',])
    })
})

