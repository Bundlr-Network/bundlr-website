import { GetServerSideProps } from 'next'
import { Home } from '@/templates'
export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {

    }
  }
}

export default Home
