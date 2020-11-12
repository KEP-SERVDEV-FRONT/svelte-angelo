<script>
  let something = [{ value: 0 }, { value: 1 }, { value: 2 }];

  function case1() {
    something.forEach((_, i) => {
      something[i].value = "ref" + i;
    });
  }

  function case2() {
    something.forEach((s, i) => {
      s.value = "no_ref" + i;
    });
  }

  function refresh() {
    something = something;
  }

  /*
    [값 참조]
    a = "문자"
    b = a
    a = "english"
    console.log(a)
    console.log(b)

    [주소 참조]
    a = [1,2,3]
    b = a
    a.push(4)
    console.log(a)
    console.log(b)

    a = {v1: 1, v2: 2}
    b = a
    a.v3 = 3
    console.log(a)
    console.log(b)
  */
</script>

{#each something as s}
  <p>{s.value}</p>
{/each}

<button on:click={case1}> 참조변화 </button>
<button on:click={case2}> 내부객체변화 </button>
<button on:click={refresh}> 참조갱신 </button>
