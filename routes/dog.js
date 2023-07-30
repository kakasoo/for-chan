const express = require("express");
const router = express.Router();

const dogs = [];

/**
 * 얘가 1번!!
 */
router.delete("/", (req, res) => {
    const dogName = `new-dog-${dogs.length}`;
    dogs.push(dogName);
    res.send(dogs);
});

/**
 * 데이터를 전달하는 방법은,
 * ~~1. URL 주소를 쓴다.~~ // 표준이 아닌 방법. 쉽게 말하면 add-dog은 잘못된 방법!!!
 *
 * 2. 콜론을 이용해서 Params로 전달한다.
 * 3. 쿼리 (= 쿼리파라미터)로 전달한다.
 * 4. 바디 (body)로 전달한다. GET, HEAD 메서드로는 body를 보낼 수 없다.
 */

/**
 * 얘가 2번!
 */
router.get("/:productId", (req, res) => {
    console.log("params : ", req.params); // 콜론 뒤의 변수는 파람스로 간다.
    console.log("query : ", req.query); // 물음표 뒤의 변수는 쿼리로 간다.ㄴ
    const abc = req.query.abc;
    const kakasoo = req.params.kakasoo;
    const answer = Number(abc) + Number(kakasoo);
    console.log(answer);
    res.send(`${answer}`);
});

/**
 * 3. 쿼리파라미터!!!
 *
 * 쿼리 파라미터는 URL 주소의 일부분은 맞지만, URL 주소의 라우팅 경로는 아니다.
 * 그래서 '/' 경로에 데이터가 나온 것이다!
 */
router.get("/", (req, res) => {
    console.log(req.query);
    res.send(dogs);
});

module.exports = router;

/**
 *
 * GET : 가져올 때
 * POST : 추가할 때
 * PUT : 수정할 때
 * PATCH : 일부분만 수정할 때 ( ex. 닉네임만 수정하기 )
 * DELETE : 삭제할 때
 */

console.log(123);

/**
 * 노드로 만들어진 라이브러리 (프레임워크)
 *
 * 라이브러리랑 프레임워크는 일종의 퍼즐이랑 똑같아서,
 * 미리 그림 그려놓은 조각들을 맞추면 금방 그림을 만들 수 있게 해둔 것.
 * 근데 그 조각도 결국 물감을 쓴 건 마찬가지인 것처럼,
 * 어차피 전부 다 물감의 조합이다.
 * 프레임워크를 안써도 물감 ( = 프로그래밍 언어 )를 쓰는건 똑같다.
 */
express();
