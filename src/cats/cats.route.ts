import {Router} from  "express";
import {createCat, deleteCat, readAllCat, readCat, updateCat, updatePartialCat} from "./cats.service";

const router = Router();

// READ 고양이 전체 데이터
router.get('/cats', readAllCat)

// READ 특정 고양이 데이터 조회
router.get('/cats/:id', readCat)

// CREATE 새로운 고양이 추가
router.post('/cats', createCat);

// UPDATE 고양이 데이터 수정
router.put('/cats/:id', updateCat);

// PARTIAL UPDATE 고양이 데이터 부분 수정
router.patch('/cats/:id', updatePartialCat);

// DELETE 고양이 삭제
router.delete('/cats/:id', deleteCat)

export default router;