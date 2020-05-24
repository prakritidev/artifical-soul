import React from "react"
import Layout from "../components/layout"
import { Card } from 'antd';

const { Meta } = Card;


const IndexPage = () => (
  <Layout>
    <>
      <h1>Prakritidev Verma</h1>
      <p>
        Given a non negative integer number num. For every numbers i in the range 0 ≤ i ≤ num calculate the number of 1's in their binary representation and return them as an array.

        Example 1:

        Input: 2
        Output: [0,1,1]
        Example 2:

        Input: 5
        Output: [0,1,1,2,1,2]
        Follow up:

        It is very easy to come up with a solution with run time O(n*sizeof(integer)). But can you do it in linear time O(n) /possibly in a single pass?
        Space complexity should be O(n).
        Can you do it like a boss? Do it without using any builtin function like __builtin_popcount in c++ or in any other language.
        Accepted
        241,585
        Submissions
357,642</p>

      <h1>About Me</h1>
      <Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
      >
        <Meta title="Europe Street beat" description="www.instagram.com" />
      </Card>
    </>
  </Layout >
)

export default IndexPage
