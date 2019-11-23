import { take, call, fork, put } from 'redux-saga/effects';

import { IMAGES } from '../constants';
import { fetchImageStats } from '../api';
import { loadImageStats, setImageStats, setImageStatsError } from '../actions';

export function* handleStatsRequest(id) {
    // to have only 3 tries of errors
    for (let i = 0; i < 3; i++) {
        try {
            yield put(loadImageStats(id));
            const res = yield call(fetchImageStats, id)
            yield put(setImageStats(id, res.downloads.total))
            // success exit the generator
            return true
        } catch (e) {
           
        }
    }
    // after 3 tries throw error
    yield put(setImageStatsError(id))
}

export default function* watchStatsRequest() {
    while (true) {
        const { images } = yield take(IMAGES.LOAD_SUCCESS)
        // get the id
        for (let i = 0; i < images.length; i++) {
            yield fork(handleStatsRequest, images[i].id)
        }
    }
}