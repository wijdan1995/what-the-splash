// import { takeEvery, take, call } from 'redux-saga/effects'
// import { IMAGES } from '../constants'

// // worker
// function* handleImagesLoad() {
//    console.log('fetching images from usplash')
// }

// // function* handleDang() {
// //    console.log('DANG!!!')
// // }

// //watcher
// function* rootSaga() {
//     yield takeEvery(IMAGES.LOAD, handleImagesLoad)
//     // yield take('DANG');
//     // yield call(handleDang)
//     // yield take(IMAGES.LOAD);
//     // yield call(handleImagesLoad);
    
// }

// // watcher saga -> action -> worker saga
// export default rootSaga

// import imagesSaga from './imagesSaga'

// export default imagesSaga;

import { all } from 'redux-saga/effects';

import imagesSaga from './imagesSaga';
import statsSaga from './statsSaga';

export default function* rootSaga() {
    yield all([imagesSaga(), statsSaga()]);
}