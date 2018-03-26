import { username, password } from './secrets'

export const RECEIVE_MEMES = 'RECIEVE_MEMES'
export const NEW_MEME = 'NEW_MEME'

export const receiveMemes = (json) => ({
  type: RECEIVE_MEMES,
  memes: json.data.memes
})

const fetchMemesJson = () => {
  return fetch('https://api.imgflip.com/get_memes')
    .then(res => res.json())
}

export const fetchMemes = () => (dispatch) =>
  fetchMemesJson()
    .then(json => dispatch(receiveMemes(json)))


export const newMeme = (meme) => ({
  type: NEW_MEME,
  meme
})

const postMemeJson = (params) => {
  params['username'] = username
  params['password'] = password

  const bodyParams = Object.keys(params).map(key => {
    return encodeURIComponent(key) + '=' + encodeURIComponent(params[key])
  }).join('&')

  console.log(bodyParams)

  return fetch('https://api.imgflip.com/caption_image', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: bodyParams
  }).then(res => res.json())
}

export const createMeme = (new_meme_object) => (dispatch) =>
  postMemeJson(new_meme_object)
    .then(new_meme => dispatch(newMeme(new_meme)))