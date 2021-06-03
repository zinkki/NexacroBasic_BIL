package com.nexacro.sample.service;

import java.util.List;
import java.util.Map;

import com.nexacro.sample.vo.SampleVO;
import com.nexacro.uiadapter17.spring.core.data.NexacroFirstRowHandler;

/**
 * 
 * <pre>
 * @desc    제공된 예제는 샘플용으로 작성된 코드로 참고용으로만
 *          사용하시기 바랍니다.
 * @package com.nexacro.sample.service
 * <pre>
 * 
 * @author  TOBESOFT
 * @since   2018. 1. 18.
 * @version 1.0
 * @see
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2018. 1. 18.		TOBESOFT	최초작성
 */
public interface UiAdapterSampleService {
    List<SampleVO>           selectSampleVoList(SampleVO searchInfo);
    List<Map<String,Object>> selectSampleMapList(Map<String,String> searchInfo);
    List<SampleVO>           selectSamplePaging(SampleVO searchInfo);
    
    int selectSampleCount(SampleVO searchInfo);
    void updateSampleDataWithVo(List<SampleVO> sampleList);
    void updateSampleDataWithMap(List<Map<String,Object>> sampleList);
    
    void selectLargeData(NexacroFirstRowHandler firstRowHandler, String sendDataSetName, int firstRowCount, int initDataCount);
}
